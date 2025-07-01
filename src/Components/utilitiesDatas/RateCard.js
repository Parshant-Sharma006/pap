import React from 'react'

const RateCard = () => {
  return (
    <div className="w-full mt-4">
      <div className="">
        <div className="flex gap-16 ">
          {/* Mode */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Mode <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="mode"  />
                Surface
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="mode"  />
                Air
              </label>
            </div>
          </div>

          {/* Shipping Type */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Shipping type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                 
                />
                Forward
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  
                />
                RTO
              </label>
            </div>
          </div>

          {/* Weight Slab */}
          <div>
            <label className="block font-semibold text-gray-800 mb-2">
              Weight Slab <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {["0.50", "2.00", "3.00", "5.00", "10.00", "20.00"].map(
                (weight, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="weight"
                      
                    />
                    {weight} kg
                  </label>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateCard
