FROM postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_DB E-COM-DB
COPY init-db.sql /docker-entrypoint-initdb.d/
COPY entrypoint.sh .
RUN ./entrypoint.sh
# RUN entrypoint.sh