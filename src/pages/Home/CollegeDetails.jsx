import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function CollegeDetails() {
    const colleges = useLoaderData();
    const { id } = useParams();
    // const [colleges, setCollege] = useState([]);
    // useEffect(() => {
    //     fetch('./college.json')
    //         .then(res => res.json())
    //         .then(data => setCollege(data))
    //         .catch(error => console.log(error))
    // }, []);

    const singleCollege = colleges?.find(college => college?.id == id)
    const { name, image, admissionDate, eventsDetails, recharchesHistoryDetails, sportsDetails, rating, numOfRecherch } = singleCollege;
    console.log(singleCollege)
    return (
        <div className="container mx-auto p-8">
            <div className="flex items-center mb-6">
                <img src={image} alt="College Logo" className="w-16 h-16 mr-4" />
                <h1 className="text-3xl font-semibold">{name}</h1>
            </div>


            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <h2 className="text-2xl font-semibold mb-2">Admission Process</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget vestibulum magna, eu iaculis dui.</p>
            </div>


            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <h2 className="text-2xl font-semibold mb-2">Events Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
                    {
                        eventsDetails.map(events => <>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={events.image} alt="className image" className='w-full h-72' />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {events.name}
                                        {/* <div className="badge badge-secondary">$ {rating}</div> */}
                                    </h2>
                                    <p><span className="text-xl font-semibold">Details: </span><span> {events.details}</span></p>

                                    <div>
                                    </div>
                                </div>
                            </div>

                        </>)
                    }
                </div>
            </div>


            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <h2 className="text-2xl font-semibold mb-2">Research Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
                    {
                        recharchesHistoryDetails.map(recharche => <>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={recharche.image} alt="className image" className='w-full h-72' />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {recharche.name}
                                        {/* <div className="badge badge-secondary">$ {rating}</div> */}
                                    </h2>
                                    <p><span className="text-xl font-semibold">Details: </span><span> {recharche.details}</span></p>

                                    <div>
                                    </div>
                                </div>
                            </div>

                        </>)
                    }

                </div>
            </div>


            <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <h2 className="text-2xl font-semibold mb-2">Sports Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
                    {
                        sportsDetails.map(sports => <>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={sports.image} alt="className image" className='w-full h-72' />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {sports.name}
                                        {/* <div className="badge badge-secondary">$ {rating}</div> */}
                                    </h2>
                                    <p><span className="text-xl font-semibold">Details: </span><span> {sports.details}</span></p>

                                    <div>
                                    </div>
                                </div>
                            </div>

                        </>)
                    }

                </div>
            </div>

            {/* <div className="bg-white p-4 rounded-md shadow-md mb-4">
                <h2 className="text-2xl font-semibold mb-2">Rechers Paper</h2>
                <div className="container mx-auto p-8">
                    <h1 className="text-3xl font-semibold mb-4">Research Paper Title</h1>
                    <p className="text-gray-600 mb-4">Author Name(s)</p>
                    <p className="text-gray-600 mb-8">Date</p>

                    <div className="bg-white p-6 rounded-md shadow-md mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
                        <p className="text-gray-600">Write a brief summary of your research here.</p>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-gray-600">Provide an introduction to your research topic and its significance.</p>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Literature Review</h2>
                        <p className="text-gray-600">Review existing literature related to your research area.</p>
                    </div>



                    <div className="bg-white p-6 rounded-md shadow-md mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                        <p className="text-gray-600">Summarize your findings and provide conclusions.</p>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md mb-8">
                        <h2 className="text-2xl font-semibold mb-4">References</h2>
                        <p className="text-gray-600">List the references of the sources cited in your research paper.</p>
                    </div>
                </div>
            </div> */}
            <h2 className='text-2xl md:text-2xl md:font-semibold  mt-10  mb-5 text-center'>__Reviews & Feedback__</h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='w-10/12 mx-auto'>                        
                        <h2 class="text-center text-gray-600 mb-4 text-2xl font-semibold">Studied at College of Excellence</h2>
                        <p class="text-center text-gray-800">"The college provided a fantastic learning experience with highly qualified faculty and state-of-the-art facilities. I enjoyed the diverse student community and the extracurricular activities that enriched my college life."</p>
                        <p className='text-right'>__By Jhon Doe</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-10/12 mx-auto'>                        
                        <h2 class="text-center text-gray-600 mb-4 text-2xl font-semibold">Graduated from College of Excellence</h2>
                        <p class="text-center text-gray-800">"My time at the college was transformative. The supportive environment and engaging courses helped me grow both academically and personally. I would highly recommend this college to any prospective student."</p>
                        <p className='text-right'>__By Smith Taylor</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-10/12 mx-auto'>                        
                        <h2 class="text-center text-gray-600 mb-4 text-2xl font-semibold">Education for future preparation</h2>
                        <p class="text-center text-gray-800">"This study investigates the effects of sleep deprivation on cognitive performance among college students. Using a randomized controlled trial, participants were divided into two groups: a sleep-deprived group and a well-rested group."</p>
                        <p className='text-right'>__By Robert Carlos</p>
                    </div>
                </SwiperSlide>               
            </Swiper>
        </div>
    )
}

export default CollegeDetails
