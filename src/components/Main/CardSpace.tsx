function CardSpace() {
  return (
    <div className="card w-96 shadow-xl dark:bg-slate-800">
      <figure className="px-10 pt-10">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">ENS</h2>
        <p>
          <span>62</span> members
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
    </div>
  );
}

export default CardSpace;
