
import data from '../../public/data.json';
const Cards = () => {
    console.log(data)
    return (
        <div className="mt-20">
            <h1 className="text-center text-4xl font-bold mb-20">Car Mechanics</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((mechanic, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={mechanic.image} alt={mechanic.name} style={{ width: '200px', height: '200px' }} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{mechanic.name}</h2>
                            <p>Service: {mechanic.service}</p>
                            <p>Total Work Count: {mechanic.workCount}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Book</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;