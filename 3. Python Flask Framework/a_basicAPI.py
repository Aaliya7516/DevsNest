from flask import Flask, request, jsonify, redirect

app = Flask(__name__)

@app.route('/')
def hello_world():
    print("running the basic API")
    return 'Hello World!!!!'

@app.route('/user')
def user_loading():
    return "User page Loading..."

@app.route('/post', methods=['POST']) # test in POSTMAN as data to be given in body 
def post1():                           # for chrome, need a html form
    data = request.get_data()
    return 'Hello World!!' + request.method + str(data)

@app.route('/get') # send key-value pair here
def get1():
    data = request.get_data()
    return 'Hello World!!' + request.method + str(data)

@app.route('/post2')
def post():
    data = request.json
    # data["Roy"] = "12th"   ------>>>> giving error:: TypeError: 'NoneType' object does not support item assignment
    return jsonify(data)

@app.route('/get2')
def get():
    dt = [{ "name" : "Roy","class": "12th" }]
    data = request.json
    # data["Roy"] = "12th"
    return jsonify(dt,data)

@app.route('/greet/<string:user>', methods=['GET'])
def greeting(user):
    return "Hello " + user + '!!!'

@app.route("/redirect_me/<string:user>")
def redir(user):
    return redirect('/greet/' + user)

# Take-Home Assignment (THA):
# create a flask web server that has 2 APIs:
# 1. store string - pass a string which it will store
# 2. concat strings - returns concatenated string of all strings sent till now

# ---------- THA STARTS HERE --------------

result = '' 

@app.route('/concat/<string:ss>')
def concat(ss):
    global result
    result += ' ' + ss
    return result

# ---------- THA ENDS HERE --------------

if __name__ == '__main__':
    app.run()
