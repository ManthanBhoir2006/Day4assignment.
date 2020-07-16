function marksgrade()
{
if (document.form1.text1.value >=90)
alert('Grade A+');
else
if (document.form1.text1.value >=80 && document.form1.text1.value <90)
{
alert('Grade A');
}
else
if (document.form1.text1.value >=70 && document.form1.text1.value <80)
{
alert('Grade B+');
}
else
if (document.form1.text1.value >=60 && document.form1.text1.value <70)
{
alert('Grade B');
}
else
alert('Grade C');
}