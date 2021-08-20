import string
from words import choose_word
from images import IMAGES
'''
Important instruction
* function and variable name snake_case -> is_prime
* contant variable upper case PI
'''

hint_count = 1

def is_word_guessed(secret_word, letters_guessed):
    '''
    secret_word: word guess by the user
    letters_guessed: list hold all the word guess by the user
    returns: 
      return True (if user guess the world correctly )
      return False (wrong selection)
    '''
    if secret_word == letters_guessed:
        return True
    return False

# if you want to test this function please call function -> get_guessed_word("kindness", [k, n, d])


def get_guessed_word(secret_word, letters_guessed):
    '''
    secret_word: word guess by the user
    letters_guessed: list hold all the word guess by the user
    returns: 
      return string which contain all the right guessed characters
      Example :- 
      if secret_word -> "kindness" and letters_guessed = [k, n, s]
      return "k_n_n_ss"
    ''' 
    index = 0
    guessed_word = ""
    while (index < len(secret_word)):
        if secret_word[index] in letters_guessed:
            guessed_word += secret_word[index]
        else:
            guessed_word += "_"
        index += 1
    return guessed_word


def get_available_letters(letters_guessed):
    '''
    letters_guessed: list contains all guessed characters
    returns: 
      it return string which contains all characters except guessed letters
    Example :-
      letters_guessed = ['e', 'a'] then    
      return sting is -> `bcdfghijklmnopqrstuvwxyz`
    '''
    letters_left = string.ascii_lowercase
    for letter in letters_guessed:
        if letter in letters_left:
            letters_left = letters_left.replace(letter, '')
    return letters_left

def print_image(no_of_wrong_inputs):
    print(IMAGES[no_of_wrong_inputs])

def isValid(input_character):
    if len(input_character)==1 and input_character.isalpha() :
        return True
    return False

def get_hint( letters_guessed,secret_word):
    res = []
    for let in list(secret_word):
        if let not in letters_guessed:
            return let
            
    



def hangman(secret_word):
    '''
    secret_word (string) : secret word to guessed by the user.

    Steps to start Hangman:

    * In the beginning of the game user will know about the total characters in the secret_word    

    * In each round user will guess one character 

    * After each character give feedback to the user
      * right or wrong

    * Display partial word guessed by the user and use underscore in place of not guess word    
    '''
    print('------------------------------------------------------------------------------------------------\n')
    print("  Welcome to the game, Hangman! ")
    print("  I am thinking of a word that is {} letters long.".format(
        str(len(secret_word))), end='\n\n')

    letters_guessed = []
    remaining_lives = 8
    hint_count = 1
    letter = ''
    no_of_wrong_inputs = -1
    while remaining_lives>0:
        print('------------------------------------------------------------------------------------------------\n')
        print("   Remaining Lives = ", remaining_lives)
        available_letters = get_available_letters(letters_guessed)
        print("  Available letters : {} ".format(available_letters))
        if hint_count==1:
            print("\t Guess A Letter Or Enter 'hint' To Use Your Hint ( only once ) :  ", end = '')
        else:
            print("\t Guess A Letter  :  ", end = '')
        ans = input()
        if ans == 'hint' and hint_count==0:
            print("\t OOPS ! You Have Exhausted You Hint Life\n")
            continue
        
        if ans .lower() == 'hint' and hint_count==1 :  
            l = get_hint( letters_guessed,secret_word)
            print('\t  HINT :    ', l)
            letters_guessed.append(l)
            print("\t  Word :    {} ".format(get_guessed_word(secret_word, letters_guessed)))
            available_letters = available_letters.replace(l, '') 
            hint_count = 0
            if is_word_guessed(secret_word, letters_guessed) == True:
                print("  Congratulations, you won! ", end='\n\n')
                exit()
            continue

        letter = ans
        letter = letter.lower()
        if not isValid(letter):
            print("\t\t Invaild Input !!\n")
            continue
        
        if letter in secret_word:
            letters_guessed.append(letter)
            
            print("\t Good guess      :  {} ".format(
                get_guessed_word(secret_word, letters_guessed)))
            print('\n')
            if is_word_guessed(secret_word, letters_guessed) == True:
                print(" Congratulations, you won! ", end='\n\n')
        else:
            print(" Oops! That letter is not in my word: {} ".format(
                get_guessed_word(secret_word, letters_guessed)))
            remaining_lives -= 1
            no_of_wrong_inputs += 1
            print_image(no_of_wrong_inputs)
            letters_guessed.append(letter)
            print("")

    if remaining_lives==0:
        print(" \t\t Oops You Are Hanged !! 🖤💙💚 Better Luck Next Time. \n" )
# Load the list of words into the variable wordlist
# So that it can be accessed from anywhere in the program

secret_word = choose_word()
hangman(secret_word)
