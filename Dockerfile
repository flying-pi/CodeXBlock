FROM python:2.7
RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN pip install mysql-python && \
    cd /code/xblock-sdk/ && \
    pip install -r ./requirements/base.txt

RUN pip install -e ./codex/

