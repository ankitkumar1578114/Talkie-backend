
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="movie_dataset"
)


mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM movie where original_language='hi'")

myresult = mycursor.fetchall()
import requests,webbrowser
from bs4 import BeautifulSoup
i=0
for z in myresult:
    x=myresult[i]
    i+=1
    print(i)
    search ="youtube trailer"    
    google_search = requests.get("https://www.google.com/search?q="+search+"&rlz=1C1FKPE_enIN952IN952&prmd=vin&sxsrf=ALiCzsbklZHQk_CffNjc5I6-y5zCT7jetQ:1666540043681&source=lnms&tbm=vid")
    # print(google_search.text);
    soup =BeautifulSoup(google_search.text,'html.parser')
    search_results=soup.select(".MjjYud a")
    print(search_results)
    # if(len(search_results)==0):
    #     continue
    # item =search_results[0]
    # link=item.get('src')
    # print(x[1])
    # sql = "UPDATE artist SET google_url = '"+link +"' where actor_id = "+str(x[1]);
    # # print(sql)
    # mycursor.execute(sql)
    # mydb.commit()
    # print(mycursor.rowcount, "record(s) affected")