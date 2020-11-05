
preloadPrimaryScreens = () => {
    let {
        campaign,
        location
    } = this.props;
    if (campaign) {
        if (campaign.campaign.isOtpRequired) {
            OtpFormScreen.preload();
        } else {
            FormScreen.preload();
        }
    } else if (checkLocation(location)) {
        SorryScreen.preload();
    } else {
        LocationScreen.preload();
    }
