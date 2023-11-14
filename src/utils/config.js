const envType = process.env.REACT_APP_ENV || "development";

const types = {
    production: {
        BASE_URL: "https://restaurant-booking-backend-steel.vercel.app/api/",
    }
};

export const config = types[envType];
