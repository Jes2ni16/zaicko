'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from './page.module.css';

type PropertyFormData = {
  projectUrl: string;
  projectImg: string;
  projectLocation: string;
  title: string;
  description: string;
  location: {
    locationText: string;
    descriptions: Array<{
      title: string;
      ul: string[];
    }>;
    img: string;
  };
  projectDetails: {
    ul: string[];
    imgs: string[];
  };
  amenitiesFacilities: {
    description: string;
    ul: string[];
    imgs: string[];
  };
  unitDetails: {
    text: string;
    details: Array<{
      title: string;
      ul: string[];
      imgs: string[];
    }>;
  };
  buildingFeatures: {
    text: string;
    details: Array<{
      title: string;
      ul: string[];
    }>;
  };
  unitDeliverable: {
    text: string;
    ul: string[];
    imgs: string[];
  };
  floorPlan: string[];

  siteUpdate: {
    title: string;
    imgs: string[];
  };
};

export default function CreateProperty() {

  const initialFormState: PropertyFormData = {
    projectUrl: '',
    projectImg: '',
    projectLocation: '',
    title: '',
    description: '',
    location: {
      locationText: '',
      descriptions: [{ title: '', ul: [''] }],
      img: '',
    },
    projectDetails: {
      ul: [''],
      imgs: [''],
    },
    amenitiesFacilities: {
      description: '',
      ul: [''],
      imgs: [''],
    },
    buildingFeatures: {
      text: '',
      details: [{ title: '', ul: [''] }]
    },
    unitDetails: {
      text: '',
      details: [{ title: '', ul: [''], imgs: [''] }],
    },
    unitDeliverable: {
      text: '',
      ul: [''],
      imgs: [''],
    },
    floorPlan: [''],
    siteUpdate: {
      title: '',
      imgs: [''],
    },
  };


  const [formData, setFormData] = useState<PropertyFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://zaiko-server.vercel.app/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to create property');
      
      // Reset form to initial state on success
      setFormData(initialFormState);
      toast.success('Property created successfully!');
    } catch (error) {
      toast.error('Error creating property');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  // Helper function to update nested array fields
  const updateArrayField = (path: string[], index: number, value: string) => {
    setFormData(prev => {
      const newData = { ...prev };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let current: any = newData;
      
      // Navigate to the parent object
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      const arrayKey = path[path.length - 1];
      if (Array.isArray(current[arrayKey])) {
        current[arrayKey][index] = value;
      }
      
      return newData;
    });
  };

  return (
    <div className={styles.container}>
      <h1  className={styles.heading}>Create New Property</h1>
      
      <form onSubmit={handleSubmit} className={styles.grid}>
        {/* Basic Information */}
        <section className={styles.subsection}>
        <h2 className={styles.sectionTitle}>Basic Information</h2>
        <div className={styles.grid}>
            <input
              type="text"
              placeholder="Project URL"
              value={formData.projectUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, projectUrl: e.target.value }))}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Project Image URL"
              value={formData.projectImg}
              onChange={(e) => setFormData(prev => ({ ...prev, projectImg: e.target.value }))}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className={styles.inputField}
            />
                 <input
              type="text"
              placeholder="location"
              value={formData.projectLocation}
              onChange={(e) => setFormData(prev => ({ ...prev, projectLocation: e.target.value }))}
              className={styles.inputField}
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className={styles.inputField}
              rows={4}
            />
          </div>
        </section>

        {/* Location Section */}
        <section className={styles.subsection}>
        <h2 className={styles.sectionTitle}>Location</h2>
  
  {/* Location Text */}
  <input
    type="text"
    placeholder="Location Text"
    value={formData.location.locationText}
    onChange={(e) => setFormData(prev => ({
      ...prev,
      location: { ...prev.location, locationText: e.target.value }
    }))}
    className={styles.inputField}
  />

  {/* Location Image */}
  <input
    type="text"
    placeholder="Location Image URL"
    value={formData.location.img}
    onChange={(e) => setFormData(prev => ({
      ...prev,
      location: { ...prev.location, img: e.target.value }
    }))}
    className={styles.inputField}
  />

  {/* Location Descriptions */}
  <div className={styles.grid}>
  <h3 className="text-lg font-medium">Location Descriptions</h3>
    
    {formData.location.descriptions.map((description, descIndex) => (
                  <div key={descIndex} className={styles.descriptionBox}>
        {/* Description Title */}
        <input
          type="text"
          placeholder="Description Title"
          value={description.title}
          onChange={(e) => {
            setFormData(prev => {
              const newData = { ...prev };
              newData.location.descriptions[descIndex].title = e.target.value;
              return newData;
            });
          }}
          className={styles.inputText}
        />

        {/* Description List Items */}
        {description.ul.map((item, itemIndex) => (
          <div key={itemIndex} className="flex gap-2">
            <input
              type="text"
              placeholder="List Item"
              value={item}
              onChange={(e) => {
                setFormData(prev => {
                  const newData = { ...prev };
                  newData.location.descriptions[descIndex].ul[itemIndex] = e.target.value;
                  return newData;
                });
              }}
              className={styles.projectDetailsInput}
            />
            
            {/* Add/Remove List Item Buttons */}
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => {
                    const newData = { ...prev };
                    newData.location.descriptions[descIndex].ul.push('');
                    return newData;
                  });
                }}
                className={styles.addButton}
              >
                +
              </button>
              {description.ul.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => {
                      const newData = { ...prev };
                      newData.location.descriptions[descIndex].ul.splice(itemIndex, 1);
                      return newData;
                    });
                  }}
                  className={styles.removeButton}
                >
                  -
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    ))}

    {/* Add New Description Button */}
    <button
      type="button"
      onClick={() => {
        setFormData(prev => ({
          ...prev,
          location: {
            ...prev.location,
            descriptions: [
              ...prev.location.descriptions,
              { title: '', ul: [''] }
            ]
          }
        }));
      }}
      className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Add New Description
    </button>
  </div>
</section>

        {/* Project Details */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Project Details</h2>
          
          {/* Project Details List */}
          <div className="space-y-2">
            <h3 className="font-medium">Details List</h3>
            {formData.projectDetails.ul.map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Detail"
                  value={item}
                  onChange={(e) => updateArrayField(['projectDetails', 'ul'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      projectDetails: {
                        ...prev.projectDetails,
                        ul: [...prev.projectDetails.ul, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.projectDetails.ul.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        projectDetails: {
                          ...prev.projectDetails,
                          ul: prev.projectDetails.ul.filter((_, i) => i !== index)
                        }
                      }))}
                       className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Project Images */}
          <div className="space-y-2">
            <h3 className="font-medium">Project Images</h3>
            {formData.projectDetails.imgs.map((img, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={img}
                  onChange={(e) => updateArrayField(['projectDetails', 'imgs'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      projectDetails: {
                        ...prev.projectDetails,
                        imgs: [...prev.projectDetails.imgs, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.projectDetails.imgs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        projectDetails: {
                          ...prev.projectDetails,
                          imgs: prev.projectDetails.imgs.filter((_, i) => i !== index)
                        }
                      }))}
                       className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Amenities & Facilities</h2>
          
          {/* Description */}
          <textarea
            placeholder="Description of Amenities & Facilities"
            value={formData.amenitiesFacilities.description}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              amenitiesFacilities: {
                ...prev.amenitiesFacilities,
                description: e.target.value
              }
            }))}
            className="w-full p-2 border rounded"
            rows={4}
          />

          {/* Amenities List */}
          <div className="space-y-2">
            <h3 className="font-medium">Amenities List</h3>
            {formData.amenitiesFacilities.ul.map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Amenity"
                  value={item}
                  onChange={(e) => updateArrayField(['amenitiesFacilities', 'ul'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      amenitiesFacilities: {
                        ...prev.amenitiesFacilities,
                        ul: [...prev.amenitiesFacilities.ul, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.amenitiesFacilities.ul.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        amenitiesFacilities: {
                          ...prev.amenitiesFacilities,
                          ul: prev.amenitiesFacilities.ul.filter((_, i) => i !== index)
                        }
                      }))}
                       className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Amenities Images */}
          <div className="space-y-2">
            <h3 className="font-medium">Amenities Images</h3>
            {formData.amenitiesFacilities.imgs.map((img, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={img}
                  onChange={(e) => updateArrayField(['amenitiesFacilities', 'imgs'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      amenitiesFacilities: {
                        ...prev.amenitiesFacilities,
                        imgs: [...prev.amenitiesFacilities.imgs, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.amenitiesFacilities.imgs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        amenitiesFacilities: {
                          ...prev.amenitiesFacilities,
                          imgs: prev.amenitiesFacilities.imgs.filter((_, i) => i !== index)
                        }
                      }))}
                       className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Building Features Section */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold">Building Features</h2>

  {/* Main Text */}
  <textarea
    placeholder="Building Features Description"
    value={formData.buildingFeatures.text}
    onChange={(e) => setFormData(prev => ({
      ...prev,
      buildingFeatures: {
        ...prev.buildingFeatures,
        text: e.target.value
      }
    }))}
    className="w-full p-2 border rounded"
    rows={4}
  />

  {/* Building Features Details */}
  <div className="space-y-6">
    {formData.buildingFeatures.details.map((detail, detailIndex) => (
      <div key={detailIndex} className="p-4 border rounded space-y-4 bg-gray-50">
        {/* Detail Title */}
        <input
          type="text"
          placeholder="Feature Category Title"
          value={detail.title}
          onChange={(e) => {
            setFormData(prev => {
              const newData = { ...prev };
              newData.buildingFeatures.details[detailIndex].title = e.target.value;
              return newData;
            });
          }}
          className="w-full p-2 border rounded"
        />

        {/* Feature List Items */}
        <div className="space-y-2">
          <h4 className="font-medium">Features List</h4>
          {detail.ul.map((item, itemIndex) => (
            <div key={itemIndex} className="flex gap-2">
              <input
                type="text"
                placeholder="Feature"
                value={item}
                onChange={(e) => {
                  setFormData(prev => {
                    const newData = { ...prev };
                    newData.buildingFeatures.details[detailIndex].ul[itemIndex] = e.target.value;
                    return newData;
                  });
                }}
                className="flex-1 p-2 border rounded"
              />
              
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => {
                      const newData = { ...prev };
                      newData.buildingFeatures.details[detailIndex].ul.push('');
                      return newData;
                    });
                  }}
                  className={styles.addButton}
                >
                  +
                </button>
                {detail.ul.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => {
                        const newData = { ...prev };
                        newData.buildingFeatures.details[detailIndex].ul.splice(itemIndex, 1);
                        return newData;
                      });
                    }}
                     className={styles.removeButton}
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Remove Feature Category Button */}
        {formData.buildingFeatures.details.length > 1 && (
          <button
            type="button"
            onClick={() => {
              setFormData(prev => {
                const newData = { ...prev };
                newData.buildingFeatures.details.splice(detailIndex, 1);
                return newData;
              });
            }}
            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Feature Category
          </button>
        )}
      </div>
    ))}

    {/* Add New Feature Category Button */}
    <button
      type="button"
      onClick={() => {
        setFormData(prev => ({
          ...prev,
          buildingFeatures: {
            ...prev.buildingFeatures,
            details: [
              ...prev.buildingFeatures.details,
              { title: '', ul: [''] }
            ]
          }
        }));
      }}
      className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Add New Feature Category
    </button>
  </div>
</section>


        {/* Unit Details Section */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold">Unit Details</h2>

  {/* Main Text */}
  <textarea
    placeholder="Unit Details Text"
    value={formData.unitDetails.text}
    onChange={(e) => setFormData(prev => ({
      ...prev,
      unitDetails: { ...prev.unitDetails, text: e.target.value }
    }))}
    className="w-full p-2 border rounded"
    rows={4}
  />

  {/* Unit Details Array */}
  <div className="space-y-6">
    {formData.unitDetails.details.map((detail, detailIndex) => (
      <div key={detailIndex} className="p-4 border rounded space-y-4 bg-gray-50">
        {/* Detail Title */}
        <input
          type="text"
          placeholder="Unit Type Title (e.g., '1-Bedroom with Balcony')"
          value={detail.title}
          onChange={(e) => {
            setFormData(prev => {
              const newData = { ...prev };
              newData.unitDetails.details[detailIndex].title = e.target.value;
              return newData;
            });
          }}
          className="w-full p-2 border rounded"
        />

        {/* Detail List Items */}
        <div className="space-y-2">
          <h4 className="font-medium">Features List</h4>
          {detail.ul.map((item, itemIndex) => (
            <div key={itemIndex} className="flex gap-2">
              <input
                type="text"
                placeholder="Feature (e.g., 'Living Area', 'Kitchen')"
                value={item}
                onChange={(e) => {
                  setFormData(prev => {
                    const newData = { ...prev };
                    newData.unitDetails.details[detailIndex].ul[itemIndex] = e.target.value;
                    return newData;
                  });
                }}
                className="flex-1 p-2 border rounded"
              />
              
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => {
                      const newData = { ...prev };
                      newData.unitDetails.details[detailIndex].ul.push('');
                      return newData;
                    });
                  }}
                  className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  +
                </button>
                {detail.ul.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => {
                        const newData = { ...prev };
                        newData.unitDetails.details[detailIndex].ul.splice(itemIndex, 1);
                        return newData;
                      });
                    }}
                    className={styles.addButton}
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Detail Images */}
        <div className="space-y-2">
          <h4 className="font-medium">Unit Images</h4>
          {detail.imgs.map((img, imgIndex) => (
            <div key={imgIndex} className="flex gap-2">
              <input
                type="text"
                placeholder="Image URL"
                value={img}
                onChange={(e) => {
                  setFormData(prev => {
                    const newData = { ...prev };
                    newData.unitDetails.details[detailIndex].imgs[imgIndex] = e.target.value;
                    return newData;
                  });
                }}
                className="flex-1 p-2 border rounded"
              />
              
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => {
                      const newData = { ...prev };
                      newData.unitDetails.details[detailIndex].imgs.push('');
                      return newData;
                    });
                  }}
                  className={styles.addButton}
                >
                  +
                </button>
                {detail.imgs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(prev => {
                        const newData = { ...prev };
                        newData.unitDetails.details[detailIndex].imgs.splice(imgIndex, 1);
                        return newData;
                      });
                    }}
                     className={styles.removeButton}
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Remove Unit Type Button */}
        {formData.unitDetails.details.length > 1 && (
          <button
            type="button"
            onClick={() => {
              setFormData(prev => {
                const newData = { ...prev };
                newData.unitDetails.details.splice(detailIndex, 1);
                return newData;
              });
            }}
            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Unit Type
          </button>
        )}
      </div>
    ))}

    {/* Add New Unit Type Button */}
    <button
      type="button"
      onClick={() => {
        setFormData(prev => ({
          ...prev,
          unitDetails: {
            ...prev.unitDetails,
            details: [
              ...prev.unitDetails.details,
              { title: '', ul: [''], imgs: [''] }
            ]
          }
        }));
      }}
      className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Add New Unit Type
    </button>
  </div>
</section>

        {/* Deliverables */}
           {/* Unit Deliverables */}
           <section className="space-y-4">
          <h2 className="text-xl font-semibold">Unit Deliverables</h2>
          
          {/* Description */}
          <textarea
            placeholder="Description of Unit Deliverables"
            value={formData.unitDeliverable.text}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              unitDeliverable: {
                ...prev.unitDeliverable,
                text: e.target.value
              }
            }))}
            className="w-full p-2 border rounded"
            rows={4}
          />

          {/* Unit Deliverables List */}
          <div className="space-y-2">
            <h3 className="font-medium">Unit Deliverables List</h3>
            {formData.unitDeliverable.ul.map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Unit Deliverable"
                  value={item}
                  onChange={(e) => updateArrayField(['unitDeliverable', 'ul'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      unitDeliverable: {
                        ...prev.unitDeliverable,
                        ul: [...prev.unitDeliverable.ul, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.unitDeliverable.ul.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        unitDeliverable: {
                          ...prev.unitDeliverable,
                          ul: prev.unitDeliverable.ul.filter((_, i) => i !== index)
                        }
                      }))}
                       className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Unit Deliverables Images */}
          <div className="space-y-2">
            <h3 className="font-medium">Unit Deliverables Images</h3>
            {formData.unitDeliverable.imgs.map((img, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={img}
                  onChange={(e) => updateArrayField(['unitDeliverable', 'imgs'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      unitDeliverable: {
                        ...prev.unitDeliverable,
                        imgs: [...prev.unitDeliverable.imgs, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.unitDeliverable.imgs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        unitDeliverable: {
                          ...prev.unitDeliverable,
                          imgs: prev.unitDeliverable.imgs.filter((_, i) => i !== index)
                        }
                      }))}
                      className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
  <h2 className="text-xl font-semibold">Floor Plans</h2>
  
  <div className="space-y-2">
    {formData.floorPlan.map((plan, index) => (
      <div key={index} className="flex gap-2">
        <input
          type="text"
          placeholder="Floor Plan Image URL"
          value={plan}
          onChange={(e) => updateArrayField(['floorPlan'], index, e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setFormData(prev => ({
              ...prev,
              floorPlan: [...prev.floorPlan, '']
            }))}
            className={styles.addButton}
          >
            +
          </button>
          {formData.floorPlan.length > 1 && (
            <button
              type="button"
              onClick={() => setFormData(prev => ({
                ...prev,
                floorPlan: prev.floorPlan.filter((_, i) => i !== index)
              }))}
              className={styles.removeButton}
            >
              -
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</section>




                {/* Site Update */}
                <section className="space-y-4">
          <h2 className="text-xl font-semibold">Site Update</h2>
          
          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Site Update Title"
              value={formData.siteUpdate.title}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                siteUpdate: {
                  ...prev.siteUpdate,
                  title: e.target.value
                }
              }))}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Site Update Images */}
          <div className="space-y-2">
            <h3 className="font-medium">Site Update Images</h3>
            {formData.siteUpdate.imgs.map((img, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={img}
                  onChange={(e) => updateArrayField(['siteUpdate', 'imgs'], index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                />
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      siteUpdate: {
                        ...prev.siteUpdate,
                        imgs: [...prev.siteUpdate.imgs, '']
                      }
                    }))}
                    className={styles.addButton}
                  >
                    +
                  </button>
                  {formData.siteUpdate.imgs.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({
                        ...prev,
                        siteUpdate: {
                          ...prev.siteUpdate,
                          imgs: prev.siteUpdate.imgs.filter((_, i) => i !== index)
                        }
                      }))}
                      className={styles.removeButton}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Creating Property...' : 'Create Property'}
      </button>
      </form>
    </div>
  );
}