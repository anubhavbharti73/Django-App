FROM python:3.11.4
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 7000
CMD ["python","manage.py","runserver", "0.0.0.0:7000"]