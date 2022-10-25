
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="movie_dataset"
)


mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM movie")

myresult = mycursor.fetchall()
import requests,webbrowser
from bs4 import BeautifulSoup
i=45428

for z in myresult:
    x=myresult[i]
    i+=1
    print(i)
    search =x[3]+" movie"
    print(search)
    google_search = requests.get("https://www.google.com/search?q="+search+"&rlz=1C5CHFA_enIN1028IN1028&tbm=isch")
    soup =BeautifulSoup(google_search.text,'html.parser')
    # print(google_search.text)
    search_results=soup.select(".NZWO1b img")
    if(len(search_results)==0):
        continue
    item =search_results[0]
    link=item.get('src')
    sql = "UPDATE movie SET google_url = '"+link +"' where movie_id = "+str(x[1]);
    # print(sql)
    mycursor.execute(sql)
    mydb.commit()
    print(mycursor.rowcount, "record(s) affected")