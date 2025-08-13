import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PanicPage = () => {
  const [isPanicActivated, setIsPanicActivated] = useState(false);

  const handlePanicButton = async () => {
    setIsPanicActivated(true);
    try {
      // Here you would make an API call to your backend
      const response = await fetch('/api/panic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ activated: true }),
      });

      if (response.ok) {
        toast.success('Defense team alerted. Help is on the way.', {
          position: "top-center",
          autoClose: 5000,
        });
        // Simulate response from defense team after 10 seconds
        setTimeout(() => {
          toast.info('Are you safe now? Please respond.', {
            position: "top-center",
            autoClose: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }, 10000);
      } else {
        throw new Error('Failed to activate panic mode');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to alert defense team. Please try again or call emergency services.', {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-indigo-800 flex flex-col items-center justify-center p-4">
      <ToastContainer />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
        Emergency Panic Button
      </h1>
      <motion.button
        className={`w-64 h-64 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg ${
          isPanicActivated ? 'bg-red-600' : 'bg-red-500'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isPanicActivated ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, repeat: isPanicActivated ? Infinity : 0 }}
        onClick={handlePanicButton}
        disabled={isPanicActivated}
      >
        <AlertTriangle size={48} className="mr-2" />
        {isPanicActivated ? 'ACTIVATED' : 'PANIC'}
      </motion.button>
      {isPanicActivated && (
        <p className="mt-8 text-white text-xl text-center">
          Stay calm. Help is on the way. Remain in a safe location if possible.
        </p>
      )}
    </div>
  );
};

export default PanicPage;