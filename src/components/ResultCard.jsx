import React from "react";

function ResultCard({ item}) {
  const link = item.type === "video" ? item.url : item.src;

  function addToCollection(item) {
    const oldData=JSON.parse(localStorage.getItem('collection')) || []
    const newData=[...oldData,item]
    localStorage.setItem('collection',JSON.stringify(newData))
    console.log(newData);
    
    
    
  }
  return (
    <a
      href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative block w-[17vw] h-[20vw] rounded-2xl overflow-hidden bg-gray-200
  shadow-[0_8px_14px_-4px_rgba(0,0,0,0.7)]
  transition-transform duration-100
  hover:scale-[1.03]
  hover:shadow-[0_12px_22px_-4px_rgba(0,0,0,0.85)]">
      {/* MEDIA */}
      {item.type === "photo" && (
        <img
          src={item.src}
          alt={item.title || "photo"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
        />
      )}

      {item.type === "gif" && (
        <img
          src={item.src}
          alt={item.title || "gif"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}

      {item.type === "video" && (
        <video
          src={item.url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      )}

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* SAVE BUTTON */}
      <a href="#">
      <button
        onClick={()=>{addToCollection(item)}}
        className="absolute top-2 left-2 z-[999] bg-white/90 text-black text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white active:scale-95"
      >
        Save
      </button>
      </a>
      {/* TITLE */}
      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h1 className="text-white text-sm font-medium line-clamp-2">
          {item.title || item.type.toUpperCase()}
        </h1>
      </div>

      {/* TYPE BADGE */}
      <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">
        {item.type}
      </span>
    </a>
  );
}

export default ResultCard;
