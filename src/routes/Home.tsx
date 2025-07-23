export default function Home() {
    return (
        <div className='p-5 bg-primary text-white' style={{ backgroundImage: 'url(/assets/images/jumbotron.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>
                            Badger's Market
                        </h1>
                        <p>Explore, post, and buy items from fellow students!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}