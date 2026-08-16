clear
echo "============================================================================"
echo "Building Docker Image for Booky bookstore app"
echo "============================================================================"

docker build -t fraolbmax/booky-bookstore-app:latest .

# echo "============================================================================"
# echo "Docker Image built successfully"
# echo "Pushing Docker Image to Docker Hub"
# echo "============================================================================"
# # docker push fraolbmax/booky-bookstore-app:latest
