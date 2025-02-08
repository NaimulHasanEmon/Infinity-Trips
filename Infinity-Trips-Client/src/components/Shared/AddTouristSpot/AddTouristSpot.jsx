const AddTouristSpot = () => {
  const handleAddTouristSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const touristSpotName = form.touristSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const shortDescription = form.shortDescription.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const imageURL = form.imageURL.value;
    const touristInfo = {
      touristSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userEmail,
      userName,
      imageURL,
    };
    console.log(touristInfo);
  };

  return (
    <div className='flex flex-col mb-10 max-w-md md:max-w-3xl mx-auto w-full bg-white shadow-xl rounded-3xl sm:p-10 p-6'>
      <div className='text-center mb-6'>
        <p className='text-3xl font-bold'>Add Tourist Spot</p>
      </div>
      <hr className='mb-4' />
      <form onSubmit={handleAddTouristSpot}>
        {/* Upper Form Box's */}
        <div className='md:flex gap-5'>
          {/* Left Side Form */}
          <div className='flex-1 space-y-4'>
            {/* Tourist Spot Name */}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                Tourist Spot Name
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='text'
                name='touristSpotName'
                required
                placeholder='Enter tourist spot name'
              />
            </div>
            {/* Country Name */}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                Country Name
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='text'
                name='countryName'
                required
                placeholder='Enter country name'
              />
            </div>
            {/* Location */}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                Location
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='text'
                name='location'
                required
                placeholder='Enter location'
              />
            </div>
            {/* Short Description*/}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                Short Description
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='text'
                name='shortDescription'
                required
                placeholder='Enter short description'
              />
            </div>
            {/* Average Cost*/}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                Average Cost
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='text'
                name='averageCost'
                required
                placeholder='Enter average cost'
              />
            </div>
          </div>

          {/* Right Side Form */}
          <div className='flex-1 space-y-4'>
            {/* Seasonality*/}
            <div>
              <fieldset className='fieldset p-0'>
                <label className='text-sm font-semibold text-gray-600'>
                  Seasonality
                </label>
                <select
                  className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                  name='seasonality'
                  required
                >
                  <option disabled selected>
                    Pick a season
                  </option>
                  <option>Summer</option>
                  <option>Winter</option>
                </select>
              </fieldset>
            </div>
            {/* Travel Time*/}
            <div>
              <fieldset className='fieldset p-0'>
                <label className='text-sm font-semibold text-gray-600'>
                  Travel Time
                </label>
                <select
                  className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                  name='travelTime'
                  required
                >
                  <option disabled selected>
                    Time to travel (in days)
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>7+</option>
                </select>
              </fieldset>
            </div>
            {/* Total Visitors Per Year */}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                Total Visitors Per Year
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='number'
                name='totalVisitorsPerYear'
                required
                placeholder='Enter total visitors per year'
              />
            </div>
            {/* User E-mail */}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                User E-mail
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='email'
                name='userEmail'
                required
                placeholder='Enter your email'
              />
            </div>
            {/* User Name */}
            <div>
              <label className='text-sm font-semibold text-gray-600'>
                User Name
              </label>
              <input
                className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                type='text'
                name='userName'
                required
                placeholder='Enter your name'
              />
            </div>
          </div>
        </div>

        {/* Image URL */}
        <div className='mt-4'>
          <label className='text-sm font-semibold text-gray-600'>
            Image-URL
          </label>
          <input
            className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
            type='url'
            name='imageURL'
            required
            placeholder='Enter spot image URL'
          />
        </div>

        {/* Add Tourist Spot Button */}
        <div className='mt-6'>
          <button
            className='w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 cursor-pointer text-xl font-semibold button-login'
            type='submit'
          >
            <span>Add Tourist Spot</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristSpot;
