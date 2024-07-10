import "./Locations.module.css"

const locations = [
    {
      name: 'BTM Layout - Bangalore',
      address: '#63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage, BTM Layout, Bengaluru, Karnataka 560029',
    },
    {
      name: 'Marathahalli - Bangalore',
      address: '#1, 4th Main Rd, Extension, Ayyappa Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037',
    },
    {
      name: 'Kukatpally - Hyderabad',
      address: "#101, Vandana's Trade Center, Beside Padmavathi Plaza, Above Union Bank, Kukatpally, Hyderabad 500072",
    },
    {
      name: 'Mumbai - Maharashtra',
      address: 'Satra Plaza, Unit No. 1011, 10th Floor, Palm Beach, Rd Phase 2, Sector 14,19D, Vashi, Navi Mumbai, Maharashtra - 400703',
    },
    {
      name: 'Pune - Maharashtra',
      address: 'Times Square, S-699/1, Near Saibaba Mandir, Pune-Satara Road, Pune - 411037',
    },
    {
      name: 'Chennai - Tamilnadu',
      address: 'No 7, Dayasadan road, Opp Shell petrol pump, near Amma Unavagam, Nerkundram, Chennai - 600 107',
    },
  ];
  
  const Locations = () => (
    <div className="container text-center py-5">
      <h2>Locations</h2>
      <p>Come and discuss with us about your goals, we transform your goals into success!!!</p>
      <div className="row mt-4">
        {locations.map((location, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div className="location-card p-3">
              <h4><span role="img" aria-label="location">📍</span> {location.name}</h4>
              <p>{location.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Locations;
  