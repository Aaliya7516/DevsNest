from questions import QUESTIONS
import random

def isAnswerCorrect(question, answer):
    return True if answer == question['answer'] else False


def lifeLine(ques):
    ans = ques['answer']
    ran = [1,2,3,4]
    ran.pop(ans-1)
    ran = random.choice(ran)
    
    # new_que = {
    #     'name': ques['name'],
    #     'option'+ str(ran) : ques['option' + str(ran)],
    #     'option'+ str(ans) : ques['option' + str(ans)]
    # }
    if ran > ans:
        g = ran
        l = ans
    else:
        g = ans
        l = ran
    print(f'\tQuestion : {ques["name"]}' )
    print(f'\t\tOptions:')
    print(f'\t\t\tOption {str(l)}: {ques["option" + str(l)]}')
    print(f'\t\t\tOption {str(g)}: {ques["option" + str(g)]}')
    ans = input('Your choice ( 1-4 ) : ').lower().strip()

    return ans

def kbc():

    print('Welcome to the game!!!')
    money = 0
    lifeline_count = 0

    for i in range(15):
        print(f'\tQuestion {i+1}: {QUESTIONS[i]["name"]}' )
        print(f'\t\tOptions:')
        print(f'\t\t\tOption 1: {QUESTIONS[i]["option1"]}')
        print(f'\t\t\tOption 2: {QUESTIONS[i]["option2"]}')
        print(f'\t\t\tOption 3: {QUESTIONS[i]["option3"]}')
        print(f'\t\t\tOption 4: {QUESTIONS[i]["option4"]}')
        ans = input('Your choice ( 1-4 ) : ').lower().strip()

        if ans == 'lifeline' and lifeline_count == 0:
            ans = lifeLine(QUESTIONS[i])
            lifeline_count = 1
        elif ans == 'lifeline' and lifeline_count > 0:
            print('\t\tNo lifeline left, make your choice')
            ans = input('Your choice ( 1-4 ) : ').lower().strip()

        if ans == 'quit':
            print('\nCongratulations!!! You have won Rs. ' + str(money) + ' till now.')
            break

        elif isAnswerCorrect(QUESTIONS[i], int(ans) ):
            print('\nCorrect !')
            money += int(QUESTIONS[i]['money'])
            if i != 14:
                print('Total money won till now: ' + str(money) + '\n')
                print('-----------------------------------------------------------------------------------------------\n')

        else:
            print('\nIncorrect !')
            print('The correct answer is ' + str(QUESTIONS[i]['answer']))
            if i < 5:
                print('Total money won: Rs. 0')
                money = 0
            elif i < 10:
                print('Total money won: Rs. 10,000')
                money = 10000
            else:
                print('Total money won: Rs. 3,20,000')
                money = 320000
            break

    print('Total money won in the end: Rs. ' + str(money) + '\n')


kbc()
