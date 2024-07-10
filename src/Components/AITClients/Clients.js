import "./Client.module.css"

const clients = [
    { name: 'HCL', image: '/images/clients/hcl.png' },
    { name: 'Cognizant', image: '/images/clients/cognizant.png' },
    { name: 'Infosys', image: '/images/clients/infosys.png' },
    { name: 'Accenture', image: '/images/clients/accenture.png' },
    { name: 'Oracle', image: '/images/clients/oracle.png' },
    { name: 'IBM', image: '/images/clients/ibm.png' },
    { name: 'Wipro', image: '/images/clients/wipro.png' },
    { name: 'Amazon', image: '/images/clients/amazon.png' },
    { name: 'Flipkart', image: '/images/clients/flipkart.png' },
    { name: 'Visa', image: '/images/clients/visa.png' },
    { name: 'Cisco', image: '/images/clients/cisco.png' },
    { name: 'Dell', image: '/images/clients/dell.png' }
  ];
  
  const Clients = () => (
    <div className="container text-center py-5">
      <h2>Our Corporate Clients</h2>
      <div className="row mt-4">
        {clients.map((client, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <img src={client.image} alt={client.name} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Clients;
  