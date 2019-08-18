# BUSe
BUSe is a web app for bus tracking. Built specially for daily commuters, it is the best way to know the current location of your bus.

## Setting up your development environment
Follow these steps to quickly setup your dev env. This is the env we use, everyone is free to use their own envs as long as things work.

### Clone
````
git clone https://github.com/srijans38/BUSe.git
````

### Python Virtual Env
```python
python3 -m venv ve
```
"ve" can be replaced with whatever directory name you want for your virtual env

### Switching to your virtual env
````
source ./ve/bin/activate
````
"ve" has to be replaced with whatever directory name you have for your virtual env
### Installing required modules
```python
pip install -r requirements.txt 
```
### Running Django Dev Server
```python
python manage.py runserver
```
Check by going to <a>localhost:8000</a>

