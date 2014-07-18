jquery.checkboxes.js
====================

Adds checkboxesAsBools option to $.serialize() method to pass checkbox values as booleans.

Sometimes you might want to submit checkbox values as booleans.
Default $.serialize() does not pass unchecked checkboxes to the datastring. Based on jQuery code: http://james.padolsey.com/jquery/#v=1.11.1&fn=serializeArray

## Example & usage:

    <form id="form">
          <input id="box1" type="checkbox" name="box1" checked="checked" />
          <input id="box2" type="checkbox" name="box2" />
    </form>

    $('#form').serialize()
    => "box1=on"

    $('#form').serialize({checkboxesAsBools: true})
    => "box1=true&box2=false"


## License:

The MIT License (MIT)

Copyright (c) 2014 VarmaIS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
