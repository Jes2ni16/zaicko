// pages/client/listing.tsx

const ClientListing = () => {
    const clients = [
      {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
      },
      {
        _id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '987-654-3210',
        address: '456 Oak Rd',
      },
      {
        _id: '3',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        phone: '555-123-4567',
        address: '789 Pine Ave',
      },
    ];
  
    
    return (
      <div>
        <h1>Client Listings</h1>
        <ul>
          {clients.map((client) => (
            <li key={client._id}>
              <h2>{client.name}</h2>
              <p>Email: {client.email}</p>
              <p>Phone: {client.phone}</p>
              <p>Address: {client.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ClientListing;
  