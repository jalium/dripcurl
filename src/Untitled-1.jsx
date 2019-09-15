let getUserData = () => {
  dbo
    .collection("curlInfo")
    .find({})
    .toArray((err, files) => {
      if (err) {
        return console.dir(err);
      }
      if (!files || files.length === 0 || err) {
        console.log("no users");
        res.send(JSON.stringify({ success: false }));
      } else {
        return files.forEach(file => {
          userData[count++] = {
            username: file.username,
            profilePic: file.frontendPath,
            type: [
              {
                pattern: file.pattern,
                texture: file.texture,
                porosity: file.porosity
              }
            ],
            products: [
              {
                shampoo: file.shampoo,
                conditioner: file.conditioner,
                leaveIn: file.leaveIn,
                treatments: file.treatments,
                stylers: file.stylers
              }
            ]
          };
        });
      }
    });
};
