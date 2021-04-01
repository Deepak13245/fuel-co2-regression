FROM python:3.6.13

WORKDIR /app

ADD requirements.txt .
RUN pip install -r requirements.txt

ENV PORT 8080

ADD api ./api/
ADD models ./models/

EXPOSE 8080

CMD python api/index.py
