"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, DialogActions, DialogContent, DialogTitle, Box, FormControlLabel, Dialog, Checkbox } from '@mui/material';

interface Client {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  fb?: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
  background?: string;
  background_mobile?: string;
  image:string;
  linked:string;
  image_mobile: string;
  url?: string;
  projects?: string[];
}

interface CreateClientProps {
  client: Client | null;
  onClose: () => void;
  onSuccess: () => void;
}

const CreateClientComponent = ({ client, onClose, onSuccess }: CreateClientProps) => {
  const [name, setName] = useState<string>(client?.name || '');
  const [email, setEmail] = useState<string>(client?.email || '');
  const [phone, setPhone] = useState<string>(client?.phone || '');
  const [address, setAddress] = useState<string>(client?.address || '');
  const [fb, setFb] = useState<string | undefined>(client?.fb || undefined);
  const [tiktok, setTiktok] = useState<string | undefined>(client?.tiktok || undefined);
  const [website, setWebsite] = useState<string | undefined>(client?.website || undefined);
  const [instagram, setInstagram] = useState<string | undefined>(client?.instagram || undefined);
  const [youtube, setYoutube] = useState<string | undefined>(client?.youtube || undefined);
  const [linked, setLinked] = useState<string | undefined>(client?.linked || undefined);
  const [background, setBackground] = useState<string | undefined>(client?.background || undefined);
  const [backgroundMobile, setBackgroundMobile] = useState<string | undefined>(client?.background_mobile || undefined);
  const [image, setImage] = useState<string | undefined>(client?.image || undefined);
  const [imageMobile, setImageMobile] = useState<string | undefined>(client?.image_mobile || undefined);
  const [url, setUrl] = useState<string | undefined>(client?.url || undefined);
  const [projects, setProjects] = useState<string[]>(client?.projects || []); // State for checklist
  const [isChecklistOpen, setChecklistOpen] = useState(false);

  const checklistOptions = ["urban-deca-mandaue", "primeworld-district", "le-menda-busay", "primeworld-pointe","clarendon-residences","mandtra","north-grove-pristina","tierra-alta","guada-verde-residences", "plumera-lapu","dannara-north","mactan-plains","breeza-coves-lapu","arc-tower","mingla-highland","balai-mactan","cistyscape-grand-tower","casa-mira-south","casa-mira-mandaue","128-nivel-hills", "mivela-residences","amani-mactan","royal-oceancrest-mactan","turnberry-place-2","royal-oceancrest-panglao","alberlyn-boxhill-residences","harrington-place-pooc","la-bellezah-compostela"];

  useEffect(() => {
    if (client) {
      setName(client.name);
      setEmail(client.email);
      setPhone(client.phone);
      setAddress(client.address);
      setFb(client.fb || undefined);
      setTiktok(client.tiktok || undefined);
      setInstagram(client.instagram || undefined);
      setWebsite(client.website || undefined);
      setLinked(client.linked || undefined);
      setYoutube(client.youtube || undefined);
      setBackground(client.background || undefined);
      setBackgroundMobile(client.background_mobile || undefined);
      setImage(client.image || undefined);
      setImageMobile(client.image_mobile || undefined);
      setUrl(client.url || undefined);
      setProjects(client.projects || []);
    }
  }, [client]);

  const handleTagChange = (project: string) => {
    if (projects.includes(project)) {
      setProjects(projects.filter((t) => t !== project));
    } else {
      setProjects([...projects, project]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientData: Partial<Client> = {
      name,
      email,
      phone,
      address,
      fb,
      tiktok,
      instagram,
      youtube,
      website,
      linked,
      background,
      background_mobile: backgroundMobile || '', 
      image,
      image_mobile:imageMobile,
      url,projects,
    };

    try {
      if (client && client._id) {
        await axios.put(
          `https://zaiko-server.vercel.app/api/clients/${client._id}`, 
          clientData,
          { withCredentials: true }  // Include credentials for cookies
        );
      } else {
        await axios.post(
          'https://zaiko-server.vercel.app/api/clients', 
          clientData,
          { withCredentials: true }  // Include credentials for cookies
        );
      }
      onSuccess();
    } catch (error) {
      console.error('Error creating or updating client:', error);
    }
  };

  return (
    <>
      <DialogTitle>{client ? 'Edit Client' : 'Add Client'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ minWidth: 800 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Phone"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                label="Address"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Facebook"
                fullWidth
                value={fb || ''}
                onChange={(e) => setFb(e.target.value || undefined)}
              />
              <TextField
                label="TikTok"
                fullWidth
                value={tiktok || ''}
                onChange={(e) => setTiktok(e.target.value || undefined)}
              />
                  <TextField
                label="Website"
                fullWidth
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value || undefined)}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Instagram"
                fullWidth
                value={instagram || ''}
                onChange={(e) => setInstagram(e.target.value || undefined)}
              />
              <TextField
                label="YouTube"
                fullWidth
                value={youtube || ''}
                onChange={(e) => setYoutube(e.target.value || undefined)}
              />
                      <TextField
                label="LinkedIn"
                fullWidth
                value={linked || ''}
                onChange={(e) => setLinked(e.target.value || undefined)}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Listing Desktop"
                fullWidth
                value={background || ''}
                onChange={(e) => setBackground(e.target.value || undefined)}
              />
              <TextField
                label="Listing  Mobile"
                fullWidth
                value={backgroundMobile || ''}
                onChange={(e) => setBackgroundMobile(e.target.value || undefined)}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Home Desktop"
                fullWidth
                value={image || ''}
                onChange={(e) => setImage(e.target.value || undefined)}
              />
              <TextField
                label="Home Mobile"
                fullWidth
                value={imageMobile || ''}
                onChange={(e) => setImageMobile(e.target.value || undefined)}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => setChecklistOpen(true)}
                color="primary"
              >
                {projects.length > 0
                  ? `Projects Selected (${projects.length})`
                  : "Select Projects"}
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            {client ? 'Update' : 'Create'}
          </Button>
        </DialogActions>

        <Dialog open={isChecklistOpen} onClose={() => setChecklistOpen(false)}>
        <DialogTitle>Select Projects</DialogTitle>
        <DialogContent>
          {checklistOptions.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={projects.includes(option)}
                  onChange={() => handleTagChange(option)}
                />
              }
              label={option}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setChecklistOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      </form>
    </>
  );
};

export default CreateClientComponent;
