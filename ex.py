# //==================Exercise #1 ==========//
# /*Write a function that takes in the string and the list of dog names, loops through 
# the list and checks that the current name is in the string passed in. The output should be:
# "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
# */


dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
dog_names = ["Max","HAS","PuRple","dog"]

for d in dog_names:
    if d in dog_string:
        print(f'Matched dog_name {d}')
    else:
        print("No Matches")
