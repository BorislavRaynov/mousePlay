Application which visualize the current reading of serial data from the movement of a mouse and when the left mouse’s button is pressed it is taking a picture of a connected webcam. As a final result, to save the current coordinates of the mouse cursor and data-source of the image in SQLite database.

---
###OPTIONS TO TEST THE APP
---
1: Running the app on Ubuntu:
    - sudo apt update
    - pip install -r requirements. txt
    - python manage.py runserver
---
2: Running the app in Docker Container:
    - docker-compose up -d

    #to see all the database entities

    - python manage.py creatsuperuser #folow the guidelines
    
    #access the database on 127.0.0.1:8000/admin and login with superuser credentials
    #click on MousClick to see the entities in desc order by time of creation

---
The app can be accessed on localhost:8000 or 127.0.0.1:8000
