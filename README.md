This repo is to demonstrate how to consume a GraphQL, through Netlify functions, in a React CRA app and host the website in Netlify.

Clone this repo and run the following command:

```
netlify login
```

![image](https://github.com/user-attachments/assets/3cd137b2-11d8-4e52-b2f4-5502d00f6cac)

Authorize.

![image](https://github.com/user-attachments/assets/4d09b603-7df6-4631-9295-4f9e35adf03f)

![image](https://github.com/user-attachments/assets/ea019a27-c7fb-4bd9-9681-c18d73db7c44)

You're now logged-in to Netlify.

Remove the following folders (only if present):
```
rm -drf .netlify/ build/ package-lock.json
```

Create a site
```
netlify sites:create --name ayyappum
```

Run the following command to view the current Netlify user & Netlify site info :
```
netlify status
```

Build. THIS IS VERY IMPORTANT when you make changes later. The changes will be pulled during deploy only if build command is run before deploy.
```
netlify build
```

Deploy the site.
```
netlify deploy --prod
```

You will get the website URL in the command line:
```
Website URL:       https://ayyappum.netlify.app
```

![image](https://github.com/user-attachments/assets/b7496fa1-d067-4d6e-96a7-2c1eaeecfbec)

Load the website URL.

![image](https://github.com/user-attachments/assets/105d2100-f089-4730-a304-bedef15451ba)

![image](https://github.com/user-attachments/assets/d69e42b5-8b74-4ac5-b268-9bef91987235)

List the sites:
```
$ netlify sites:list
✔ Loading your sites
────────────────────────────┐
 Current Netlify Sites    │
────────────────────────────┘
Count: 1
ayyappum - 3d250238-ea37-4d29-9db4-02916e5a59a9
  url:  https://ayyappum.netlify.app
  account: ayyappum
```

Delete the site by passing the siteId:
```
$ netlify sites:delete 3d250238-ea37-4d29-9db4-02916e5a59a9
Warning: You are about to permanently delete "ayyappum"
         Verify this siteID "3d250238-ea37-4d29-9db4-02916e5a59a9" supplied is correct and proceed.
         To skip this prompt, pass a --force flag to the delete command
Be careful here. There is no undo!
? WARNING: Are you sure you want to delete the "ayyappum" site? Yes
Deleting site "3d250238-ea37-4d29-9db4-02916e5a59a9"...
Site "3d250238-ea37-4d29-9db4-02916e5a59a9" successfully deleted!
```

The following error would be thrown if you load the website URL after deleting the site:

![image](https://github.com/user-attachments/assets/b05346dd-eda3-4972-815b-f1ac3485e48a)

**IMPORTANT COMMANDS:**

```
netlify login
netlify logout
netlify status
netlify build
netlify deploy
```

**COURTESY:**

`https://countries.trevorblades.com/graphql`

Tested with
* npm version - 9.8.0
* netlify version - netlify-cli/17.36.0 linux-x64 node-v20.5.0

