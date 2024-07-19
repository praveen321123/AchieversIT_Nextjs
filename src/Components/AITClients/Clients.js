import styles from"./Client.module.css"

const clients = [
    { name: 'HCL', image: '/images/hcl.png' },
    { name: 'Cognizant', image: '/images/cognizant.png' },
    { name: 'Infosys', image: '/images/infosys.png' },
    { name: 'Accenture', image: '/images/accenture.png' },
    { name: 'Oracle', image: '/images/oracle.png' },
    { name: 'IBM', image: '/images/ibm.png' },
    { name: 'Wipro', image: '/images/wipro.png' },
    { name: 'Amazon', image: '/images/amazon.png' },
    { name: 'Flipkart', image: '/images/flipcart.png' },
    { name: 'Visa', image: '/images/visa.png' },
    { name: 'Cisco', image: '/images/cisco.png' },
    { name: 'Dell', image: '/images/dell.png' }
  ];
  
  const Clients = () => (
    <div className={`${styles.mainContainer} container py-5`}>
      <h2 className="fw-bold mb-5">Our Corporate Clients</h2>
      <div className="row text-center">
        {clients.map((client, index) => (
          <div className="col-md-2 col-6 mb-4 d-flex align-items-center justify-content-center" key={index}>
            <img src={client.image} alt={client.name} className={`${styles.clientImg} img-fluid`} />
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Clients;
  