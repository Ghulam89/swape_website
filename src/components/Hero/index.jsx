import React, { useState } from 'react';
import Header from '../header';
import Button from '../Button';
import { LiaAngleDownSolid } from 'react-icons/lia';

const Hero = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    text: 'USDT',
    imgSrc: require('../../assets/images/USDT.png'),
  });

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setDropdownOpen(false);
  };

  const currencies = [
    { text: 'USDT', imgSrc: require('../../assets/images/USDT.png') },
    { text: 'BTC', imgSrc: require('../../assets/images/USDT.png') },
    { text: 'ETH', imgSrc: require('../../assets/images/USDT.png') },
    // Add more currencies as needed
  ];

  return (
    <div className='tw-bg-Hero tw-w-full tw-bg-black tw-object-cover tw-object-center'>
      <Header />
      <div className='tw-flex tw-justify-center tw-items-center'>
        <div className='row'>
          <div className='col-md-6 tw-pt-11 tw-pb-20 tw-mx-auto'>
            <div className='tw-w-full tw-text-center'>
              <h1 className='tw-text-white tw-text-[40px] tw-font-Sora tw-uppercase tw-font-bold'>
                Diamond Reserve <span className='tw-text-[#8DE1E4]'>Token</span>
              </h1>
              <p className='tw-text-white tw-font-Sora'>
                Welcome to the Worlds First Token backed by a Real Diamond! Each DMDR Token is backed one to one by a 1-Carat Lab Grown round Diamond that you can redeem.
              </p>
            </div>
            <div className='tw-bg-gradient-to-b tw-from-[#23282a] tw-to-black tw-border-[15px] tw-mt-6 tw-w-full tw-border-[#55585b] from-[#5a5c5f] to-black tw-bg-no-repeat tw-rounded-3xl tw-bg-HeroForm tw-bg-cover py-5 px-4 tw-bg-center'>
              <h4 className='tw-text-white text-[30px] tw-font-Sora tw-pb-5 tw-text-center'>PURCHASE DMDR</h4>
              <div className='tw-flex tw-flex-col tw-gap-5'>
                <div className=' tw-relative'>
                  <label className='tw-text-white tw-pb-3'>YOU PAY</label>
                  <div className='tw-p-2.5 tw-rounded-xl tw-border tw-border-[#8DE1E4] tw-flex'>
                    <input defaultValue={0} className='tw-bg-transparent tw-text-2xl tw-font-poppins tw-text-white tw-outline-none tw-w-full' />
                    <button onClick={toggleDropdown} className='tw-py-2 tw-justify-between tw-items-center tw-flex tw-gap-2 tw-px-6 tw-rounded-lg tw-text-white tw-border tw-border-[#8DE1E4]'>
                      {selectedCurrency.text}
                      <img src={selectedCurrency.imgSrc} alt={selectedCurrency.text} />
                      <LiaAngleDownSolid size={25} color='#8DE1E4' />
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className='tw-bg-[#23282a] tw-rounded-lg tw-mt-2 tw-absolute tw-right-0 tw-z-10'>
                      {currencies.map((currency) => (
                        <div
                          key={currency.text}
                          onClick={() => handleCurrencyChange(currency)}
                          className='tw-px-4 tw-py-2 tw-flex tw-items-center tw-gap-2 tw-cursor-pointer hover:tw-bg-[#8DE1E4] hover:tw-text-black'
                        >
                          <img src={currency.imgSrc} alt={currency.text} className='tw-w-6 tw-h-6' />
                          <span>{currency.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label className='tw-text-white tw-pb-3'>YOU RECEIVE</label>
                  <div className='tw-p-2.5 tw-rounded-xl tw-border tw-border-[#8DE1E4] tw-flex'>
                    <input defaultValue={0} className='tw-bg-transparent tw-text-2xl tw-font-poppins tw-text-white tw-outline-none tw-w-full' />
                    <button className='tw-py-2 tw-flex tw-gap-2 tw-px-6 tw-rounded-lg tw-text-white tw-border tw-border-[#8DE1E4]'>
                      DMDR
                      <img src={require('../../assets/images/dmand.png')} alt='DMDR' />
                    </button>
                  </div>
                </div>
                <div className='tw-mt-3'>
                  <button className={'tw-w-full tw-bg-[#8DE1E4] tw-p-3 tw-font-bold tw-rounded-md'}>BUY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
