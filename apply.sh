#!/bin/sh

docker build -t hoya0220/portfolio-service .
kubectl apply -f ./deployment/portfolio-service.yaml