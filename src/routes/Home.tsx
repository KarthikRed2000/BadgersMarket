import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export default function Home() {
    return (
        <div className="screen">
            <div className='p-5 bg-primary text-white' style={{ backgroundImage: 'url(/images/jumbotron.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
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
            <div className='container my-5'>
                <div className='row text-center'>
                    <div className='col-md-4'>
                        <Card>
                            <CardImg alt="Marketplace" src="/images/marketPlace.jpg" />
                            <CardBody>
                                <CardTitle><h2>Welcome to Badger's Market</h2></CardTitle>
                                <CardText>
                                    Your one-stop platform for buying and selling items within the campus community.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <CardImg alt="Marketplace" src="/images/browse.jpg" />
                            <CardBody>
                                <CardTitle><h2>Browse through our endless Listings</h2></CardTitle>
                                <CardText>
                                    Browse through our latest listings, sort by category, or search for specific items.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card>
                            <CardImg alt="Marketplace" src="/images/sell.jpg" />
                            <CardBody>
                                <CardTitle><h2>Have something to sell? Join us!</h2></CardTitle>
                                <CardText>
                                    List your items for sale and connect with potential buyers in the campus community.
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="text-center" style={{ backgroundColor: '#373737', color: '#ddd' }}>
                <div className="row" style={{ padding: '10px' }}>
                    <div className="col-12">
                        <h2>Join the Community</h2>
                        <p>Sign up today to start buying and selling with fellow students!</p>
                        <p>Whether you're looking for textbooks, furniture, or electronics, Badger's Market has you covered.</p>
                        <p>Connect with other students, negotiate prices, and make transactions safely and securely.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}