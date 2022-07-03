FROM public.ecr.aws/lambda/nodejs:16
COPY . ${LAMBDA_TASK_ROOT}
RUN npm install
ENV LD_LIBRARY_PATH=/var/task/node_modules/canvas/build/Release
RUN yum install -y zip
RUN zip -r function.zip .
CMD [ "index.handler" ]
