import { useEffect, useState } from "react";
import firebase from "./config/firebase";

function App() {
  const [image, setImage] = useState("");
  const [flower, setFlower] = useState("");
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleImage = e => {
    const reader = new FileReader();
    reader.onloadend = function () {
      setImage(reader.result);
    };
    reader.readAsDataURL(e);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setIsLoading(true);

    firebase
      .database()
      .ref("flowers/")
      .push({
        image: image,
        name: flower,
        price: price,
      })
      .then(() => {
        alert("berhasil, berhasil, berhasil hore");
      })
      .catch(() => alert("gagal"));

    setIsLoading(false);
    clearForm();
  };

  const clearForm = () => {
    setImage("");
    setFlower("");
    setPrice(0);
  };

  return (
    <div className="container-md pt-3">
      <h1 className="text-center">Floral-App Admin</h1>
      <hr />

      <form className="border rounded shadow p-3 mt-3">
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            id="image"
            onChange={e => handleImage(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama Bunga
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={flower}
            onChange={e => {
              setFlower(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Harga Bunga
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>
        {isLoading && (
          <button
            type="submit"
            className="btn btn-primary disabled"
            onClick={handleSubmit}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </button>
        )}
        {!isLoading && (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default App;
