import os
from time import sleep
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
  
 
options = webdriver.ChromeOptions()
# options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))
 
driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
 
driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")
# delete this after every month
 
while "1" != input("press 1 when signed in: "):
    pass

sleep(4)

buttons = driver.find_elements_by_class_name("invitation-card__action-btn")

count=0

while (count/2) < 10:
    try:
        # sleep(1)       
        # print(buttons[count].get_attribute("aria-label").split()[0])
        if  buttons[count].get_attribute("aria-label").split()[0] == 'Accept':
            print("Accepting...")
            buttons[count].click()
            print("Accepted!!")
            sleep(1)
            buttons = driver.find_elements_by_class_name("invitation-card__action-btn")
        count += 1
        
    except Exception as e:
        driver.close()
        print("error processing link\nlink: ", buttons[count], "\nerror",  e)

driver.close()