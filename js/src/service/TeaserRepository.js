const teaserRepository = {
    fetchAll(callback) {
        fetch("/api/teaser.json").then((response) => {
            if (response.ok) {
                return response.json()
            }
        }).then(body => {
            callback(body);
        });
    }
}

export { teaserRepository };