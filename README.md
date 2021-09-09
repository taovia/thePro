
## Run Code

<br>

Create python virtual environment
~~~
python -m venv venv
~~~

Run python virtual environment
~~~
venv\Scripts\activate
~~~

Into backend folder
~~~
cd backend
~~~

Install backend dependencies
~~~
pip install -r requirements.txt
~~~

Migrate data
~~~
python manage.py migrate
~~~

Run backend server
~~~
python manage.py runserver
~~~

Into frontend folder
~~~
cd frontend
~~~

Install frontend dependencies
~~~
npm install
~~~

Run frontend Server
~~~
npm run dev
~~~
