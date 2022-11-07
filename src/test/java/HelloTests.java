import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class HelloTests {

    @Test
    void helloTest1() {
        Assertions.assertEquals("Hello World!",hello.helloWorld(),"Passed assertion" );
    }
}
