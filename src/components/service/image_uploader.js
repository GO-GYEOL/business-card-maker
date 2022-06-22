class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "w9ntgduk");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dcnhgv8xg/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}
export default ImageUploader;
