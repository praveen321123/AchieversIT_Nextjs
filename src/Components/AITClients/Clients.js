import styles from"./Client.module.css"

const clients = [
    { name: 'HCL', image: '/icons/hcl.png' },
    { name: 'Cognizant', image: '/icons/cognizant.png' },
    { name: 'Infosys', image: '/icons/infosys.png' },
    { name: 'Accenture', image: '/icons/accenture.png' },
    { name: 'Oracle', image: '/icons/oracle.png' },
    { name: 'IBM', image: '/icons/ibm.png' },
    { name: 'Wipro', image: '/icons/wipro.png' },
    { name: 'Amazon', image: '/icons/amazon.png' },
    { name: 'Flipkart', image: '/icons/flipcart.png' },
    { name: 'Visa', image: '/icons/visa.png' },
    { name: 'Cisco', image: '/icons/cisco.png' },
    { name: 'Dell', image: '/icons/dell.png' }
  ];
  
  const Clients = () => (
    <div className={`${styles.mainContainer} container py-5`}>
      <h2 className="fw-bold mb-5">Our Corporate Clients</h2>
      <div className="row my-4 text-center">
        {clients.map((client, index) => (
          <div className="col-md-2 col-sm-6 mb-4" key={index}>
            <img src={client.image} alt={client.name} className={`${styles.clientImg} img-fluid`} />
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Clients;
  