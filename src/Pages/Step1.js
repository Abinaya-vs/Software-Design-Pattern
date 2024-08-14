import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import './Step1.css';

const Step1 = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        condition: '',
        description: '',
        price: '',
        priceType: '',
        publisher: '',
        publishingYear: '',
        mrp: '',
        pages: '',
        language: '',
        name: '',
        email: '',
        mobile: '',
        city: '',
        images: [], // Array for multiple images
        video: null // Single video file
    });

    const navigate = useNavigate();

    const validateStep = () => {
        if (step === 1) {
            return formData.title && formData.category && formData.condition;
        } else if (step === 2) {
            return formData.description && formData.price && formData.priceType && formData.publisher && formData.publishingYear && formData.mrp && formData.pages && formData.language && formData.images.length > 0 && formData.video;
        } else if (step === 3) {
            return formData.name && formData.email && formData.mobile && formData.city;
        }
        return false;
    };

    const nextStep = () => {
        if (validateStep()) {
            setStep(step + 1);
        } else {
            alert('Please fill out all required fields.');
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileUpload = (files, type) => {
        if (type === 'image') {
            setFormData({
                ...formData,
                images: files
            });
        } else if (type === 'video') {
            setFormData({
                ...formData,
                video: files[0]
            });
        }
    };
  

    const handleSubmit = () => {
        navigate('/postbook', { state: formData });
    };

    const FileUpload = ({ type }) => {
        const { getRootProps, getInputProps } = useDropzone({
            accept: type === 'image' ? 'image/jpeg, image/png, image/jpg' : 'video/mp4, video/mkv, video/avi',
            maxSize: type === 'image' ? 3145728 : 52428800, // 3MB for images, 50MB for videos
            multiple: type === 'image', // Allow multiple files for images
            onDrop: (acceptedFiles) => {
                handleFileUpload(acceptedFiles, type);
            }
        });

        return (
            <div className="upload-container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className="dz-message">{`Drop ${type}s here or click to upload.`}</div>
                </div>
                {type === 'image' && formData.images.length > 0 && (
                    <div className="image-preview">
                        <h3>Preview Images:</h3>
                        {formData.images.map((file, index) => (
                            <div key={index} className="image-wrapper">
                                <img src={URL.createObjectURL(file)} alt={`Preview ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}
                {type === 'video' && formData.video && (
                    <div className="video-preview">
                        <h3>Preview Video:</h3>
                        <video width="400" controls>
                            <source src={URL.createObjectURL(formData.video)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
        <Navbar2/>
            <div className="form-container">
                <div className="steps">
                    <div className={`step ${step === 1 ? 'active' : ''}`}>Step 1</div>
                    <div className={`step ${step === 2 ? 'active' : ''}`}>Step 2</div>
                    <div className={`step ${step === 3 ? 'active' : ''}`}>Step 3</div>
                </div>
                {step === 1 && (
                    <div className="form-step">
                        <h2>Ad Information</h2>
                        <label>
                            Title 
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter title character limit (50)"
                                onChange={handleChange}
                                value={formData.title}
                                required
                            />
                        </label>
                        <label>
                            Category 
                            <select
                                name="category"
                                onChange={handleChange}
                                value={formData.category}
                                required
                            >
                                <option>Select an option</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Academic">Academic</option>
                                <option value="Genres and Themes">Genres and Themes</option>
                                <option value="Hand-Written Copies">Hand-Written Copies</option>
                            </select>
                        </label>
                        <label>
                            Item Condition 
                            <select
                                name="condition"
                                onChange={handleChange}
                                value={formData.condition}
                                required
                            >
                                <option>Select an option</option>
                                <option>New</option>
                                <option>Used</option>
                                <option>Vintage</option>
                            </select>
                        </label>
                    </div>
                )}
                {step === 2 && (
                    <div className="form-step">
                        <h2>Ad Details</h2>
                      
                        <label>
                            Description 
                            <textarea
                                name="description"
                                placeholder="Enter description"
                                onChange={handleChange}
                                value={formData.description}
                                required
                            ></textarea>
                        </label>
                        <br></br>
                        <label>
                            Price 
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter price"
                                onChange={handleChange}
                                value={formData.price}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Price Type 
                            <select
                                name="priceType"
                                onChange={handleChange}
                                value={formData.priceType}
                                required
                            >
                                <option>Select an option</option>
                                <option>Fixed</option>
                                <option>Negotiable</option>
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Click the box below to add photos
                        </label>
                        <FileUpload type="image" />
                        <label>
                        <br></br>
                            Click the box below to add a video
                        </label>
                        <FileUpload type="video" />
                        <br></br>
                        <label>
                            Publisher
                            <input
                                type="text"
                                name="publisher"
                                placeholder="Enter publisher"
                                onChange={handleChange}
                                value={formData.publisher}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Publishing Year
                            <input
                                type="text"
                                name="publishingYear"
                                placeholder="Enter publishing year"
                                onChange={handleChange}
                                value={formData.publishingYear}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            MRP(₹) 
                            <input
                                type="number"
                                name="mrp"
                                placeholder="Enter MRP"
                                onChange={handleChange}
                                value={formData.mrp}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            No.Pages
                            <input
                                type="number"
                                name="pages"
                                placeholder="Enter number of pages"
                                onChange={handleChange}
                                value={formData.pages}
                                required
                            />
                        </label>
                        <br></br>
                        <label>
                            Book Language
                            <input
                                type="text"
                                name="language"
                                placeholder="Enter language"
                                onChange={handleChange}
                                value={formData.language}
                                required
                            />
                        </label>
                        <br></br>
                    </div>
                )}
                {step === 3 && (
                    <div className="form-step">
                        <h2>User Information</h2>
                        <label>
                            Your Name 
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={formData.name}
                                required
                            />
                        </label>
                        <label>
                            Email 
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />
                        </label>
                        <label>
                            Mobile Number
                            <input
                                type="number"
                                name="mobile"
                                placeholder="Enter mobile number"
                                onChange={handleChange}
                                value={formData.mobile}
                                required
                            />
                        </label>
                        <label>
                            City
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter city"
                                onChange={handleChange}
                                value={formData.city}
                                required
                            />
                        </label>
                    </div>
                )}
                <div className="form-navigation">
                    {step > 1 && <button onClick={prevStep}>Previous</button>}
                    {step < 3 ? (
                        <button onClick={nextStep}>Next</button>
                    ) : (
                        <button onClick={handleSubmit}>Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step1;
