import React, { useState } from 'react';
import ShopHeader from '@/components/Shop/ShopHeader';
import Button from '@/components/Shop/Button';
import LanguageList from '@/components/Shop/Language/LanguageList';
import AddLanguage from '@/components/Shop/Language/AddLanguage';
import { languageList as initialLanguageList } from "@/Data/Languages";

const Languages = () => {
  const [isAddLanguageVisible, setAddLanguageVisible] = useState(false);
  const [language, setLanguage] = useState(initialLanguageList); 

  const handleAddLanguage = (newLanguage) => {
    setLanguage([...language, newLanguage]);
    setAddLanguageVisible(false);
  }

  const handleAddLanguageClick = () => {
    setAddLanguageVisible(true);
  };

  return (
    <div>
      {/* ShopHeader and Button */}
      <div className="flex justify-between px-4">
        <ShopHeader />
        <Button title="Add Language" onClick={handleAddLanguageClick} />
      </div>

      {/* Language List */}
      <LanguageList language={language} />

      {isAddLanguageVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-10">
          <AddLanguage handleClose={() => setAddLanguageVisible(false)} handleAdd={handleAddLanguage} />
        </div>
      )}
    </div>
  );
};

export default Languages;
