function Nft({name}) {
  return (
    <div style={{ border: "1px solid black", width: "max-content" }}>
      <div style={{ background: "red", width: 150, height: 200 }}></div>
      <div>
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div>
        <p>Price</p>
        <p>0.423 Either</p>
      </div>
    </div>
  );
}

export default Nft;
