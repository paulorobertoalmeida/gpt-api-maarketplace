import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';

const Stats: React.FC = () => {
  return <div>
    <div className="bg-white">
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <h1 className="Italic blue-700">World’s Largest API Hub</h1>
            <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">
                  <AnimatedNumber countTo={25000} />+
                </h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Custom GPT Projects</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900">$<AnimatedNumber id="countto2" countTo="12"></AnimatedNumber>m</h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Estimated Annual Revenue Growth</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"><AnimatedNumber id="countto3" countTo="2600" data-decimal="1"></AnimatedNumber>k+</h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Global Partners</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-900"><AnimatedNumber id="countto4" countTo="18000"></AnimatedNumber>+</h3>
                <p className="text-base font-medium leading-7 text-center text-dark-grey-600">Daily Website Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Stats;