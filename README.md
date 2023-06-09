# Promise Loader

A small and simple to use function, that allows loading scripts atop of promises.
The main point of using it is to reduce code repetition and also promise operations (chaining, joining, racing, etc) over script loading.

## Using the loader

Obviously the first step is to include our main file, **PromiseLoader.js** on your HTML:

```html
<script src="./PromiseLoader.js"></script>
```

Having our script loader avaliable, we can use it in a pretty straight-foward way:

```js
PromiseLoad('your_script.js');
```

## **Parameters**

As any JS project, this one also brings some flexibility in its use.

### **Src** &nbsp;*`String`*
The url of the script to be loaded.

### **Head** &nbsp;*`Boolean`* (Optional)
If the script tag will be added to the document head element.  
Defaults to true.

### **Attributes** &nbsp;*`Object<String, String>`* (Optional)
Plain object containing additional attributes for the script tag.

## **Returns** &nbsp;*`Promise<Event>`*

A Promise instance that resolves to the script's onLoad event. In case of error the promise will be rejected and reject to the script's onError event.