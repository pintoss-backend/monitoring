FROM docker.elastic.co/elasticsearch/elasticsearch:8.7.1

RUN elasticsearch-plugin install --batch analysis-nori
