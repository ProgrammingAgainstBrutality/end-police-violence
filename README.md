# End Police Violence

[Live Site](https://programmingagainstbrutality.github.io/end-police-violence/)

The creators of this site do not condone or encourage violence.

This site is dedicated to sharing and preserving records of police violence
during the 2020 protests sparked by the murder of George Floyd by ex-cop Derek
Chauvin.

From Martin Luther King Jr.:

> I think America must see that riots do not develop out of thin air. Certain
> conditions continue to exist in our society which must be condemned as
> vigorously as we condemn riots. But in the final analysis, a riot is the
> language of the unheard.

## Contributing

The content on this site is static - there is no way to directly submit content.
If you have a video that you would like to contribute, please provide the
information by [opening an issue here](https://github.com/ProgrammingAgainstBrutality/end-police-violence/issues/new).

Please provide context and a source link, prefferably from Reddit, Twitter,
Youtube or Streamable, so the content and be downloaded and preserved.

You can also contribute by downloading copies of these videos to help ensure
they are preserved and continue to be shared in the event that the current
videos and sources are removed.

If you have some experience working with GitHub, please feel free to fork, clone
and host your own copy of this website.

## Programmatically Download All Videos

All video information is stored here in a [JSON file](https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json)

If you're using a Mac, you can quickly download all the videos compiled here
via the terminal. First, if you don't have it, install [Homebrew](https://brew.sh/):

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Then, install [`jq`](https://stedolan.github.io/jq/download/) and [`youtube-dl`](https://github.com/ytdl-org/youtube-dl):

```sh
brew install jq
brew install youtube-dl
```

Then, run the following command:

```sh
curl 'https://raw.githubusercontent.com/ProgrammingAgainstBrutality/end-police-violence/master/videos.json' | jq -r '.[].url' > videos.txt && youtube-dl -i -a videos.txt -o '%(id)s.%(ext)s'
```

This will download all videos and save them by their IDs.

## Manually Download Videos

Most of these videos were downloaded from their original sources manually. To do
this, copy the source link for each video [displayed on the site](https://programmingagainstbrutality.github.io/end-police-violence/)

For Reddit videos, we used [https://redv.co/](https://redv.co/) (Note: online version does not
perserve sound)

For Twitter videos: [https://twdownload.com/](https://twdownload.com/ )

For YouTube and Streamable: [https://keepv.id/](https://keepv.id/)
