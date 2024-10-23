import CanvasJSReact from '@canvasjs/react-charts';
import { useState } from 'react';
import Loading from './Loading';
import { toast } from 'sonner';
import { FaUpload } from 'react-icons/fa';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const setInfo = async () => {
    if (!selectedImage) {
      toast.error("Choisissez une image");
      return;
    }
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setData([{ id: 1 }]);
    setIsLoading(false);
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
   
    axisY: {
      title: "Monthly Active Users",
      includeZero: true,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          { y: 2200000000, label: "Facebook" },
          { y: 1800000000, label: "YouTube" },
          { y: 800000000, label: "Instagram" },
          { y: 563000000, label: "Qzone" },
          { y: 376000000, label: "Weibo" },
          { y: 336000000, label: "Twitter" },
          { y: 330000000, label: "Reddit" },
        ],
      },
    ],
  };

  const handleUploadImg = () => {
    const inputUpload = document.getElementById("img-upload")
    inputUpload.click();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="flex flex-col items-center p-8 bg-gray-100 h-screen">
        <div className="w-full flex justify-between mb-8">
          {/* card img */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 mx-4 items-center text-center">
            <h3 className="text-lg font-semibold mb-4">Image</h3>
            {selectedImage ? (
              <div className="w-auto h-auto">
                <img
                  src={selectedImage}
                  alt="Aperçu"
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            ) : (
              <p className="text-gray-500">Aucune image sélectionnée</p>
            )}
          </div>
          {/* card with chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 mx-4 text-center">
            <h3 className="text-lg font-semibold mb-4">Graph</h3>
            {isLoading ? (
              <div className="w-[100px] h-[100px]">
                <Loading />
              </div>
            ) : (
              data !== null && <CanvasJSChart options={options} />
            )}
          </div>
        </div>
        {/* <h2 className="text-xl font-bold mb-4">Télécharger une image</h2> */}
        <div className='flex flex-row gap-2'>

        <div>
          <button
            className="mt-4 flex items-center bg-[#0022ff] text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={handleUploadImg}
          >
            Ajouter image
          </button>
          <input
          type="file"
          accept="image/*"
          id='img-upload'
          onChange={handleImageChange}
          className="mt-4 p-2 border rounded-lg w-full max-w-md"
          hidden
        />
        </div>
        
        <button
          onClick={setInfo}
          className="mt-4 flex items-center bg-[#0022ff] text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <FaUpload className="mr-2" /> Compter
        </button>
        </div>
      </div>
    </div>
  );
};

export default App;

