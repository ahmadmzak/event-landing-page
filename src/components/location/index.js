import React from "react";

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.3325456770517!2d-115.17606558427586!3d36.10975528009665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c43105c1ff4f%3A0x6d0f5e8df39e7c48!2sThe+Cosmopolitan+of+Las+Vegas!5e0!3m2!1sen!2s!4v1540575811257"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            />
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
