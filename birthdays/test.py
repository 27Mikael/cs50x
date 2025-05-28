import sqlite3

connect = sqlite3.connect("birthdays.db")
cursor = connect.cursor()

cursor.execute("SELECT * FROM birthdays")
for row in cursor:
    print(row)
