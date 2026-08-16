clear
echo "============================================================================"
echo "Removing Bookstore App in Docker"
echo "============================================================================"
docker stop bookstore-test
docker rm bookstore-test


echo "Starting Bookstore App in Docker"
echo "============================================================================"
docker run -d \
  --name bookstore-test \
  --network host \
  --env-file .env.production \
  fraolbmax/booky-bookstore-app:latest
  
docker logs -f -t bookstore-test
